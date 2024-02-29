import { render, screen } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

const reservationSlot = [
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00"
];

test('Renders static text in the BookingForm component', () => {
    render(<BookingForm reservationSlot={reservationSlot} />);
    const staticTextElement = screen.getByText("Full Name");
    expect(staticTextElement).toBeInTheDocument();
})
