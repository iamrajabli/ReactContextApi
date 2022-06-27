
const Employee = ({ employees }) => {
    return (
        <>
            {
                employees.map((employee) => {
                    const { id, name, email, address, phone } = employee;
                    
                    return (
                        <tr key={id}>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{address}</td>
                            <td>{phone}</td>
                            <td>
                                <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                            </td>
                        </tr>
                    )
                })
            }
        </>
    )
}

export default Employee;    