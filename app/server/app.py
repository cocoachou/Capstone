from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.utils import secure_filename
import os
import sys

sys.path.append(os.path.abspath(os.path.join(__file__, '..', '..', 'model')))
from result import result

folder_path = "app/server/uploads"

app = Flask(__name__)
CORS(app)

current_directory = os.path.dirname(os.path.abspath(__file__))
UPLOAD_FOLDER = os.path.join(current_directory, 'uploads')

ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/', methods=['GET'])
def index():
    return "성공 >__<"

@app.route('/upload', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'GET':
        return "upload"

    if 'file' not in request.files:
        return jsonify({'error': 'no file'})

    file = request.files['file']

    if file.filename == '':
        return jsonify({'error': 'no selected file'})

    if not os.path.exists(app.config['UPLOAD_FOLDER']):
        os.makedirs(app.config['UPLOAD_FOLDER'])

    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

        result(folder_path)


    return jsonify({'error': 'file format error'})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
