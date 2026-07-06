from flask import Flask,request,jsonify,render_template
import pickle
import numpy as np
import pandas as pd
from sklearn.preprocessing import StandardScaler
application = Flask(__name__)
app=application

ridge_model=pickle.load(open('models/ridge.pkl','rb'))
standard_scaler=pickle.load(open('models/scaler.pkl','rb'))
@app.route("/")
def index():
  return render_template("index.html")

@app.route("/predictdata", methods=["GET", "POST"])
def predict_datapoint():

    if request.method == "POST":

        Temperature = float(request.form.get('Temperature'))
        RH = float(request.form.get('RH'))
        Ws = float(request.form.get('Ws'))
        Rain = float(request.form.get('Rain'))
        FFMC = float(request.form.get('FFMC'))
        DMC = float(request.form.get('DMC'))
        ISI = float(request.form.get('ISI'))
        Classes = float(request.form.get('Classes'))
        Region = float(request.form.get('Region'))

        new_data_scaled = standard_scaler.transform([[
            Temperature,
            RH,
            Ws,
            Rain,
            FFMC,
            DMC,
            ISI,
            Classes,
            Region
        ]])

        result = ridge_model.predict(new_data_scaled)

        prediction = round(result[0], 2)

        # Fire Risk Category
        if prediction < 5:
            risk = "LOW"
            color = "green"
            advice = "Low fire risk. Conditions are generally safe."

        elif prediction < 15:
            risk = "MODERATE"
            color = "yellow"
            advice = "Moderate fire risk. Stay alert."

        elif prediction < 30:
            risk = "HIGH"
            color = "orange"
            advice = "High fire risk. Avoid open flames."

        else:
            risk = "EXTREME"
            color = "red"
            advice = "Extreme fire risk. Immediate precautions are recommended."

        return render_template(
            "home.html",
            result=prediction,
            risk=risk,
            color=color,
            advice=advice
        )

    return render_template("home.html")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8085)