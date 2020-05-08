import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />);

    const header = getByText(/checkout form/i);

    expect(header).toBeInTheDocument();
  
});

test("form shows success message on submit with form details", () => {
    const { getByLabelText, getByText, getByTestId, findAllByText } = render(<CheckoutForm />);

        const firstNameInput = getByLabelText(/first Name/i);
        const lastNameInput = getByLabelText(/last Name/i);
        const addressInput = getByLabelText(/address/i);
        const cityInput = getByLabelText(/city/i);
        const stateInput = getByLabelText(/state/i);
        const zipInput = getByLabelText(/zip/i);

    fireEvent.change(firstNameInput,{target: { value: "drake" }
});
    fireEvent.change(lastNameInput,{target: { value: "alia" }
});
    fireEvent.change(addressInput,{target: { value: "classified" }
});
    fireEvent.change(cityInput,{target: { value: "gotham city" }
});
    fireEvent.change(stateInput,{target: { value: "america" }
});
    fireEvent.change(zipInput,{target: { value: "batcave" }
});

const checkoutButton = getByLabelText(/checkout/i);

fireEvent.click(checkoutButton);

findAllByText(/drake/i);

expect(getByTestId("successMessage")).toBeInTheDocument();

});
