import { useAuthState, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.config";
import "../../App.css";

const DashboardHome = () => {
  const [user] = useAuthState(auth);

  const [updateProfile, updating, error] = useUpdateProfile(auth);

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (updating) {
    return <p>Updating...</p>;
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    alert("Update profile?");
    if (alert) {
      handleUpdateUser(e);
    }
  };

  const handleUpdateUser = (e) => {
    const displayName = e.target.displayName.value;
    const photoURL = e.target.photoURL.value;
    console.log(displayName, photoURL);
    updateProfile({ displayName, photoURL });
  };
  return (
    <div className="profile">
      <div className="my-profile">
        <h4 className="font-bold text-3xl text-center my-3 text-[#ff0000]">
          My Profile
        </h4>
        <div className="my-profile-pic my-3 mx-auto">
          {user.photoURL ? (
            <img className="rounded-full border" src={user?.photoURL} alt="" />
          ) : (
            <div
              style={{ width: "80px", height: "80px", fontSize: "40px" }}
              className="rounded-full border flex justify-center items-center"
            >
              <h1>{user?.email?.slice(0, 1).toLocaleUpperCase()}</h1>
            </div>
          )}
        </div>
        <div>
          <h5 className="m-0 pt-3 text-xl font-semibold">
            {user?.displayName.toUpperCase()}
          </h5>
          <p>{user?.email}</p>
          <button
            onClick={() => document.getElementById("my_modal_1").showModal()}
            className="my-btn text-black my-5"
          >
            EDIT PROFILE
          </button>

          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <dialog id="my_modal_1" className="modal -z-0">
            <div className="modal-box">
              <form onSubmit={handleUpdate}>
                <div className="App">
                  <input
                    placeholder="Name"
                    className="input block w-full mb-4 input-bordered"
                    required
                    type="text"
                    name="displayName"
                  />
                  <input
                    type="text"
                    className="input block w-full mb-4 input-bordered"
                    required
                    placeholder="Photo URL"
                    name="photoURL"
                  />
                </div>
                <div className="modal-action">
                  <button type="submit" className="btn btn-warning">
                    Update profile
                  </button>
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>{" "}
              </form>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
