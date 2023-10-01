import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { useParams } from 'react-router-dom';
import { IVehicle } from "../data/models";
import { products } from "../data/testData";
import { Link } from 'react-router-dom';
import { getVeh, delVeh, delAllVeh } from "../http/userAPI"
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function ProductPage() {
    const { productId } = useParams();
    const curr = products.find(prod => { return prod.id == productId });

    const [veh, setVeh] = useState<IVehicle>()
    let stat = 0;
    useEffect(() => {
        getVeh(productId).then(data => {
            setVeh(data.data)
        })
    }, [stat])
    const remVeh = async (e: React.ChangeEvent<any>) => {
        e.preventDefault()
        const response = await delVeh(productId)
        stat++;
        toast.success('Delited !', {
            position: toast.POSITION.TOP_RIGHT
        });
    }
    const remAllVeh = async (e: React.ChangeEvent<any>) => {
        e.preventDefault()
        const response = await delAllVeh(veh?.type)
        stat++;
        toast.success('Delited !', {
            position: toast.POSITION.TOP_RIGHT
        });
    }
    return (
        <div className="page">
            <Header />
            <ToastContainer></ToastContainer>
            <div className="page__wrap">
                <div className="container">
                    <h1>{veh?.name}</h1>
                    <table>
                        <tr>
                            <th>Attributes</th>
                            <th>Data</th>
                        </tr>
                        <tr>
                            <td>ID</td>
                            <td>{veh?.id}</td>
                        </tr>
                        <tr>
                            <td>Coordinates</td>
                            <td>{veh?.coordinates.x} {veh?.coordinates.y}</td>
                        </tr>
                        <tr>
                            <td>DATE</td>
                            <td>{veh?.creationDate.toString()}</td>
                        </tr>
                        <tr>
                            <td>TYPE</td>
                            <td>{veh?.type}</td>
                        </tr>
                        <tr>
                            <td>FUEL TYPE</td>
                            <td>{veh?.fuelType}</td>
                        </tr>
                        <tr>
                            <td>Engine Power</td>
                            <td>{veh?.enginePower}</td>
                        </tr>
                    </table>
                    <div className="product__btns">
                        <button className="product__del" onClick={remVeh}>Remove Vehicle</button>
                        <Link className="product__del" to={{ pathname: "/update/" + productId }}>Update Vehicle</Link>
                        <button className="product__del" onClick={remAllVeh}>Remove all Vehicles with this TYPE</button>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}