from flask import Flask, request, jsonify, redirect

app = Flask(__name__, static_url_path='/static')

@app.route('/')
def index():
    return redirect('/static/index.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.get_json()
    outdoor_temp = float(data['temperature'])
    time = int(data['time'])
    sunlight = data['sunlight']
    windows_open = data['windowsOpen']

    base_increase = 0.5 if sunlight == 'partial' else 1.0 if sunlight == 'direct' else 0.2
    multiplier = 0.75 if windows_open else 1.25

    car_temp = outdoor_temp + time * base_increase * multiplier
    return jsonify({"car_temp": round(car_temp, 1)})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)