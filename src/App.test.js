import {screen,render} from "@testing-library/jest-dom";
import Testing from "./component/Testing_/Testing";

test("Name is present or not",()=>{
    render(<Testing/>);
    const checking = screen.getByText("Mofijul Haque");
    expect(checking).toBeInTheDocument();
});