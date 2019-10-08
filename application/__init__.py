from flask import Flask, request, render_template
app = Flask(__name__)

@app.route("/")
@app.route("/index")
def index():
    return render_template('base.html', title='Home')
    
@app.route('/header', methods=['GET', 'POST'])
def index_func():
    if request.method == 'POST':
        # do stuff when the form is submitted
        # redirect to end the POST handling
        # the redirect can be to the same route or somewhere else
        return redirect(url_for('index'))
    # show the form, it wasn't submitted
    return render_template('header.html')    