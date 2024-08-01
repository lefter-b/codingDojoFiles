import { Link } from "react-router-dom";

const Pet = () => {



    return (
        <>
            <div className="nav">
                <h1>Pet Shelter</h1>
                <Link to={'/s'} className="add">Add a pet to the shelter</Link>
            </div>
            <h3 className="pets">These pets are looking for a good home </h3>

            <table className="table">
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Actions</th>
                </tr>
                <tr>
                    <td>Garfield</td>
                    <td>Cat</td>
                    <Link to={'/g'}>
                    <td className="details">details </td>
                    </Link>
                    <Link to={'/Eg'}>
                    <td className="edit">| edit</td>
                    </Link>
                
                </tr>
                <tr>
                    <td>Doraemon</td>
                    <td>Cat</td>
                    <Link to={'/g'}>
                    <td className="details">details </td>
                    </Link>
                    <Link to={'/Eg'}>
                    <td className="edit">| edit</td>
                    </Link>
                </tr>
                <tr>
                    <td>Snoopy</td>
                    <td>Dog</td>
                    <Link to={'/g'}>
                    <td className="details">details </td>
                    </Link>
                    <Link to={'/Eg'}>
                    <td className="edit">| edit</td>
                    </Link>
                </tr>
                <tr>
                    <td>Dug</td>
                    <td>Dog</td>
                    <Link to={'/g'}>
                    <td className="details">details </td>
                    </Link>
                    <Link to={'/Eg'}>
                    <td className="edit">| edit</td>
                    </Link>
                </tr>
                <tr>
                    <td>Daffy</td>
                    <td>Duck</td>
                    <Link to={'/g'}>
                    <td className="details">details </td>
                    </Link>
                    <Link to={'/Eg'}>
                    <td className="edit">| edit</td>
                    </Link>
                </tr>
                <tr>
                    <td>Pen Pen</td>
                    <td>Penguin</td>
                    <Link to={'/g'}>
                    <td className="details">details </td>
                    </Link>
                    <Link to={'/Eg'}>
                    <td className="edit">| edit</td>
                    </Link>
                </tr>
            </table>
        </>
    )
}
export default Pet;