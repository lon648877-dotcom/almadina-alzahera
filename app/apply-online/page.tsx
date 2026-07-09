import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ApplyOnlinePage() {
  return (
    <>
      <Navbar />

      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "70px 24px 90px",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "30px", fontWeight: 800 }}>
          APPLY ONLINE
        </h1>

        <div
          style={{
            width: "70px",
            height: "3px",
            backgroundColor: "#0f7c8f",
            margin: "12px 0 22px",
          }}
        />

        <form
          action="https://formsubmit.co/info@almadinaalzahera.com"
          method="POST"
          encType="multipart/form-data"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px 30px",
          }}
        >
          <input type="hidden" name="_subject" value="New Job Application" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />

          <input name="first_name" placeholder="First Name" required style={inputStyle} />
          <input name="last_name" placeholder="Last Name" required style={inputStyle} />

          <input name="email" type="email" placeholder="Email" required style={inputStyle} />
          <input name="phone" placeholder="Phone" required style={inputStyle} />

          <input name="address" placeholder="Address Line" style={inputStyle} />
          <input name="city" placeholder="City" style={inputStyle} />

          <input name="state" placeholder="State" style={inputStyle} />
          <input name="pincode" placeholder="Pincode" style={inputStyle} />

          <input name="country" placeholder="Country" style={inputStyle} />

          <div>
            <label style={{ display: "block", marginBottom: "6px" }}>
              Employee Status:
            </label>
            <select name="employee_status" style={selectStyle}>
              <option>Fresher</option>
              <option>Experienced</option>
            </select>
          </div>

          <input name="current_employer" placeholder="Current Employer / Last" style={inputStyle} />
          <input name="designation" placeholder="Designation" style={inputStyle} />

          <input name="salary" placeholder="Salary (Annually)" style={inputStyle} />
          <input name="reason_for_leaving" placeholder="Reason for Leaving" style={inputStyle} />

          <div style={{ gridColumn: "1 / 3" }}>
            <label style={{ display: "block", marginBottom: "6px" }}>
              Upload Your CV :
            </label>
            <input name="attachment" type="file" style={fileStyle} />
          </div>

          <input
            name="message"
            placeholder="Message"
            style={{
              ...inputStyle,
              gridColumn: "1 / 3",
            }}
          />

          <button type="submit" style={buttonStyle}>
            APPLY NOW
          </button>
        </form>
      </main>

      <Footer />
    </>
  );
}

const inputStyle: React.CSSProperties = {
  height: "56px",
  border: "1px solid #e5e7eb",
  padding: "0 20px",
  fontSize: "15px",
  outline: "none",
  backgroundColor: "#ffffff",
};

const selectStyle: React.CSSProperties = {
  width: "150px",
  height: "40px",
  border: "1px solid #e5e7eb",
  padding: "0 10px",
  backgroundColor: "#ffffff",
};

const fileStyle: React.CSSProperties = {
  width: "100%",
  height: "56px",
  border: "1px solid #e5e7eb",
  padding: "16px 20px",
  backgroundColor: "#ffffff",
};

const buttonStyle: React.CSSProperties = {
  width: "140px",
  height: "48px",
  border: "none",
  backgroundColor: "#0f7c8f",
  color: "#ffffff",
  fontWeight: 800,
  cursor: "pointer",
  marginTop: "18px",
};