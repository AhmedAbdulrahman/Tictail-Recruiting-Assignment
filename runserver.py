import json
import uuid
import os
from flask import Flask, request, render_template, url_for, redirect
from flask_restful import Resource, Api
from flask_restful import abort, fields, marshal_with, reqparse

templateDirectory = os.path.join(os.path.dirname(
    os.path.abspath(__file__)), 'app/backend/templates')
staticDirectory = os.path.join(os.path.dirname(
    os.path.abspath(__file__)), 'app/backend/static')

app = Flask(
    __name__,
    template_folder=templateDirectory,
    static_folder=staticDirectory
)

api = Api(app)
contacts = json.loads(open('contacts.json').read())


@app.route('/')
def redirection():
    return redirect(url_for("application"), 302)


@app.route('/admin')
@app.route('/team')
def application():
    return render_template('index.html')


contact_fields = {
    'first_name': fields.String,
    'last_name': fields.String,
    'title': fields.String,
    'color': fields.String,
    'image': fields.String,
    'location': fields.String,
    'team': fields.String,
    'id': fields.String,
}

parser = reqparse.RequestParser()  # Used for POST & PUT
q_parser = reqparse.RequestParser()  # Used for filtering
for name in contact_fields:
    if name == 'id':
        continue
    q_parser.add_argument(name)
    parser.add_argument(name, required=True)  # Defaults to unicode type


class Contacts(Resource):

    @marshal_with(contact_fields)
    def get(self):
        filters = q_parser.parse_args()
        if not any(filters.values()):
            return contacts.values()

        # Filter results
        results = {}
        for k, v in filters.iteritems():
            if v is None:
                continue
            for user_id, contact in contacts.iteritems():
                if v in contact[k]:
                    results[user_id] = contact
        return results.values()

    @marshal_with(contact_fields)
    def post(self):
        args = parser.parse_args()
        contact = args
        user_id = str(uuid.uuid4())
        contact['id'] = user_id
        contacts[user_id] = contact
        return contact


class Contact(Resource):
    @marshal_with(contact_fields)
    def get(self, user_id):
        if user_id not in contacts:
            abort(404)
        return contacts[user_id]

    @marshal_with(contact_fields)
    def put(self, user_id):
        if user_id not in contacts:
            abort(404)
        args = parser.parse_args()
        contacts[user_id] = args
        contacts[user_id]['id'] = user_id
        return contacts[user_id]

    def delete(self, user_id):
        if user_id not in contacts:
            abort(404)
        del contacts[user_id]
        return None, 204


api.add_resource(Contacts, '/contacts')
api.add_resource(Contact, '/contacts/<string:user_id>')

if __name__ == '__main__':
    app.run(debug=True)
