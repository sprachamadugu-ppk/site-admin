import { render, screen,  } from "@testing-library/react";
import "@testing-library/jest-dom";
import SiteForm from "../components/SiteForm";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

jest.mock("./usefetch", () => ({
  useFetch: jest.fn(() => ({
    simulationsData: [
      { id: "1", name: "Simulation 1" },
      { id: "2", name: "Simulation 2" },
    ],
    adminData: [
      { id: "admin1", firstname: "John", lastname: "Doe" },
      { id: "admin2", firstname: "Jane", lastname: "Doe" },
    ],
  })),
}));

jest.mock("../api/api-calls", () => ({
  postData: jest.fn(() => ({ status: 200 })),
}));

const mockContextValue = { token: "mockToken" };
jest.mock("../context/TokenContext", () => ({
  ...jest.requireActual("../context/TokenContext"),
  authToken: {
    Consumer: ({ children }: { children: (value: any) => React.ReactNode }) =>
      children(mockContextValue),
    Provider: ({ children }: { children: React.ReactNode }) => (
      <>{children}</>
    ),
  },
}));

describe("SiteForm Component", () => {
  beforeEach(() => {
    render(<SiteForm />);
  });
  test("renders form fields", async () => {
    expect(screen.getByLabelText(/Site Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Location/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Simulations/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Company Admin/i)).toBeInTheDocument();
  });
});
