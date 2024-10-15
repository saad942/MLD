import React from 'react';
import './Depose.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faBroom } from '@fortawesome/free-solid-svg-icons';

function Depose() {
    return (
        <div>

            <div className="container my-5">
                <h3 className="text-center mb-4">Remplissez le formulaire pour commencer</h3>
                
                <form className="row g-3 ">
                    <div className="col-md-6">
                        <label className="form-label">*Nom</label>
                        <input type="text" className="form-control" placeholder="name" required />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">*CIN</label>
                        <input type="text" className="form-control" placeholder="cin" required />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">*Email</label>
                        <input type="email" className="form-control" placeholder="gmail" required />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">*Téléphone</label>
                        <input type="tel" className="form-control" placeholder="number" required />
                    </div>
                    <div className="col-md-12">
                        <label className="form-label">*Ville</label>
                        <input type="text" className="form-control" placeholder="ville" required />
                    </div>
                    <label className="form-label">*Services</label>
                    <div className="col-md-4">
                        <label className="form-label">
                            <FontAwesomeIcon icon={faShieldAlt} /> Sécurité
                        </label>
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">
                            <FontAwesomeIcon icon={faBroom} /> Ménage
                        </label>
                    </div>
                    <div className="col-12 text-center">
                        <button type="submit" className="btn btn-success w-100">Ouvrir Compte</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Depose;
