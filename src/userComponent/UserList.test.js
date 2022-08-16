import React from "react";
import UserList from "./UserList";
import { render, screen } from '@testing-library/react'

const users = [{
    "id": 1,
    "firstName": "John",
    "lastName": "Bret",
    "email": "John.Bret@google.com",
    "website": "hildegard.org"
    },
    {
        "id": 2,
        "firstName": "Chelsey",
        "lastName": "Kamren",
        "email": "Chelsey.Kamren@google.com",
        "website": "demarco.info"
    }];

describe('UserList', () => {
    test('render UserList', () => {
        render(<UserList users={users} />);
        expect(screen.getByRole('heading',{level:2})).toHaveTextContent('用户列表');
        const listItems = screen.getAllByRole('listitem');
        expect(listItems).toHaveLength(2);
        expect(listItems[0]).toHaveTextContent(`${users[0].firstName} ${users[0].lastName}`);
        expect(listItems[1]).toHaveTextContent(`${users[1].firstName} ${users[1].lastName}`);
    });
});