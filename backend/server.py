from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/api/")
def api():
    return "algo"
@app.route("/api/address/view", methods=['GET'])
def get_address_view():
    return pass

if __name__ == "__main__":
    app.run(debug=True)