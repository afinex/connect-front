import { Link } from "react-router-dom";
const PasswordForm = ({apiData}) => {
    const { userData } = apiData || {};
    return (
        <div className="container light-style flex-grow-1 container-p-y">
        <h4 className="font-weight-bold py-3 mb-4">Account settings</h4>

        <div className="card overflow-hidden">
            <div className="row no-gutters row-bordered row-border-light">
            <div className="col-md-3 pt-0">
                <div className="list-group list-group-flush account-settings-links">
                <Link to="/setting/general"
                    className="list-group-item list-group-item-action"
                    data-toggle="list"
                    href="#account-general"
                >
                    General
                </Link>
                <Link to="/setting/password"
                    className="list-group-item list-group-item-action active"
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
                    <div className="card-body">
                    <div className="form-group">
                        <label className="form-label">Current password</label>
                        <input type="password" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label className="form-label">New password</label>
                        <input type="password" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Repeat new password</label>
                        <input type="password" className="form-control" />
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

export default PasswordForm;
