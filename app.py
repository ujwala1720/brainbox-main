from flask import Flask, render_template, send_from_directory

app = Flask(__name__)

@app.route('/index')
def index():
    # Route for dashboard
    return render_template('index.html')

@app.route('/login')
def login():
    # Route for login page
    return render_template('login.html')

@app.route('/room')
def room():
    # Route for the study room
    return render_template('room.html')

@app.route('/static/<path:filename>')
def serve_static(filename):
    # Serving static files like CSS, JS, images
    return send_from_directory('static', filename)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
