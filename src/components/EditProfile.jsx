import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";

function EditProfile({ buyer, refresh, setRefresh, setEditProfile }) {
  const Buyer = useSelector((state) => state.buyer);

  const [firstname, setFirstname] = useState(buyer.firstname || "");
  const [lastname, setLastname] = useState(buyer.lastname || "");
  const [phone, setPhone] = useState(buyer.phone || "");
  const [email, setEmail] = useState(buyer.email || "");
  const [address, setAddress] = useState(buyer.direction || "");

  useEffect(() => {
    setFirstname(buyer.firstname);
    setLastname(buyer.lastname);
    setPhone(buyer.phone);
    setEmail(buyer.email);
    setAddress(buyer.direction);
  }, [buyer]);

  const handleClose = () =>{
    setEditProfile(false);
    setFirstname(buyer.firstname);
    setLastname(buyer.lastname);
    setPhone(buyer.phone);
    setEmail(buyer.email);
    setAddress(buyer.direction);
  } ;

  const submitEdit = async (e) => {
    handleClose();
    e.preventDefault();
    await axios({
      method: "patch",
      url: `${import.meta.env.VITE_URL_BASE_API}/buyer/${Buyer.id}`,
      headers: {
        Authorization: `Bearer ${Buyer.token}`,
      },
      data: {
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
        direction: address,
      },
    });
    setRefresh(!refresh);
  };
  return (
    <>
      <Card
        style={{
          width: "18rem",
          backgroundColor: "rgb(58, 145, 63)",
        }}
        className="widthCard"
      >
        <Card.Body>
          <h3 className="text-white text-center ">
            {buyer.firstname} {buyer.lastname}
          </h3>
          <p className="text-white text-center ">{buyer.email}</p>
          <div className="rounded p-2" style={{ backgroundColor: "white" }}>
            <form id="edit-form" onSubmit={(e) => submitEdit(e)}>
              <p className="m-0">Firstname:</p>
              <input
                type="text"
                className="form-control fs-5"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
              <p className="m-0">Lastname:</p>
              <input
                type="text"
                className="form-control fs-5"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
              <p className="m-0">Phone</p>
              <input
                type="text"
                className="form-control fs-5 "
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <p className="m-0">Email</p>
              <input
                type="text"
                className="form-control fs-5"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="m-0">Address</p>
              <input
                type="text"
                className="form-control fs-5"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <div className="d-flex justify-content-center gap-2 pb-2 pt-2">
                <button type="submit" className="btn btn-success fs-5">
                  Save changes
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="btn btn-danger fs-5"
                >
                  Discard changes
                </button>
              </div>
            </form>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default EditProfile;
