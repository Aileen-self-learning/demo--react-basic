import { render, screen } from '@testing-library/react';
import UserDetails from "./UserDetails";
import React from "react";

const mockFirstUser = {
    firstName: "John",
    lastName: "Bret",
    email: "John.Bret@google.com",
    website: "hildegard.org"
};

describe('UserDetails', () => {
    test('render UserDetails', () => {
        render(<UserDetails firstUser={mockFirstUser} />);
        expect(screen.getByRole('heading',{level:2})).toHaveTextContent('用户详情');
        expect(screen.getByRole('heading', {level:3})).toHaveTextContent(`${mockFirstUser.firstName} ${mockFirstUser.lastName}`);
        expect(screen.getByText(mockFirstUser.email)).toBeInTheDocument();
        expect(screen.getByText(mockFirstUser.website)).toBeInTheDocument();
    });
});