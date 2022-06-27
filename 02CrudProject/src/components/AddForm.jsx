import { Form, Button } from 'react-bootstrap';

const AddForm = () => {
    return (
        <Form>
            <Form.Group className='mb-4'>
                <Form.Control
                    type="text"
                    placeholder="Name *"
                    required
                />
            </Form.Group>

            <Form.Group className='mb-4'>
                <Form.Control
                    type="email"
                    placeholder="Email *"
                    required
                />
            </Form.Group>

            <Form.Group className='mb-4'>
                <Form.Control
                    as="textarea"
                    placeholder="Adress"
                    rows={3}
                />
            </Form.Group>

            <Form.Group className='mb-4'>
                <Form.Control
                    placeholder="Phone"
                    rows={3}
                />
            </Form.Group>

            <Button
                variant="success"
                type="submit"
                style={{ width: "100%" }}
            >
                Add New Employee
            </Button>
        </Form>
    )
}

export default AddForm;