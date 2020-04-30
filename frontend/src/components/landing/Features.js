import React from 'react';
import AvocadoSalad from '../../images/avocado-toast.jpg';
import VeggieSalad from '../../images/vegetable-green-salad.jpg';
import SaladPita from '../../images/salad-pita.jpg';
const Features = () => {
    return(
        <div className="container-fluid" id="features">
            <div className="row py-5">
                <div className="col-12 text-center">
                    <h2>Features</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-4 text-center py-3">
                    <img src={AvocadoSalad} alt="About us section" className="img-fluid"/>
                    <div>
                        <h3>Feature One</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="col-12 col-md-4 text-center py-3">
                    <img src={VeggieSalad} alt="About us section" className="img-fluid"/>
                    <div>
                        <h3>Feature Two</h3>
                        <p>Accusantium voluptatem labore ex quo molestiae quas nobis.</p>
                    </div>
                </div>
                <div className="col-12 col-md-4 text-center py-3">
                    <img src={SaladPita} alt="About us section" className="img-fluid"/>
                    <div>   
                        <h3>Feature Three</h3>
                        <p>Laudantium eligendi cumque perferendis sint impedit necessitatibus.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;