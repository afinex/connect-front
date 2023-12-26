import { Link } from "react-router-dom";
const SettingForm = ({apiData}) => {
    const { userData } = apiData || {};
    return (
        <div className="container light-style flex-grow-1 container-p-y">
        <h4 className="font-weight-bold py-3 mb-4">Account settings</h4>

        <div className="card overflow-hidden">
            <div className="row no-gutters row-bordered row-border-light">
            <div className="col-md-3 pt-0">
                <div className="list-group list-group-flush account-settings-links">
                <Link to="/setting/general"
                    className="list-group-item list-group-item-action active"
                    data-toggle="list"
                    href="#account-general"
                >
                    General
                </Link>
                <Link to="/setting/password"
                    className="list-group-item list-group-item-action"
                    data-toggle="list"
                    href="#account-change-password"
                >
                    Change password
                </Link>
                </div>
            </div>
            <div className="col-md-9">
                <div className="tab-content">
                <div className="tab-pane fade active show" id="account-general">
                    <div className="card-body media align-items-center">
                    <img
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                        alt=""
                        className="d-block ui-w-80"
                    />
                    <div className="media-body ml-4">
                        <label className="btn btn-outline-primary">
                        Upload new photo
                        <input
                            type="file"
                            className="account-settings-fileinput"
                        />
                        </label>{" "}
                        &nbsp;
                        <button
                        type="button"
                        className="btn btn-default md-btn-flat"
                        >
                        Reset
                        </button>
                        <div className="text-danger small mt-1">
                        Allowed JPG, GIF or PNG. Max size of 800K
                        </div>
                    </div>
                    </div>
                    <hr className="border-light m-0"></hr>

                    <div className="card-body">
                    <div className="form-group">
                        <label className="form-label">Username</label>
                        <input
                        type="text"
                        className="form-control mb-1"
                        placeholder={userData?.username || 'Enter your username'}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input
                        type="text"
                        className="form-control"
                        placeholder={userData?.email || 'Enter your email'}
                        />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>

        <div className="text-right mt-3">
            <button type="button" className="btn btn-primary">
            Save changes
            </button>
            &nbsp;
            <button type="button" className="btn btn-default">
            Cancel
            </button>
        </div>
        </div>
    );
};

export default SettingForm;
