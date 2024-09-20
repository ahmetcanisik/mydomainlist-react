import { GlobeAltIcon, BackspaceIcon } from "@heroicons/react/24/outline";
import { PlusIcon, BackwardIcon } from "@heroicons/react/24/solid";
import { Title } from './utils';

export default function AddDomain({ onClick }) {
    return (
        <>
            <Title title="Add Domain" icon={<GlobeAltIcon className="world-icon"/>} />
            <form>
                <div className="add-domain">
                    <div className="area">
                        <label htmlFor="select_category">Select Category</label>
                        <select tabIndex={2} className="entry" name="select_category" id="select_category">
                            <option value="ozel_alan_adlari">Özel Alan Adları</option>
                        </select>
                    </div>
                    <div className="area">
                        <label htmlFor="domain_name">Domain Name</label>
                        <input tabIndex={3} className="entry" type="text" id="domain_name" placeholder="Enter your domain name..." required/>
                    </div>
                    <div className="area">
                        <label htmlFor="domain_description">Domain Description</label>
                        <input tabIndex={4} className="entry" type="text" id="domain_description"
                               placeholder="Enter your domain description..." required/>
                    </div>
                </div>
                <div className="control-domain">
                    <button onClick={onClick} tabIndex={5} type="submit" className="btn-control btn-add">
                        <BackwardIcon className="add-icon"/>
                        <span>back</span>
                    </button>
                    <button tabIndex={5} type="submit" className="btn-control btn-add">
                        <PlusIcon className="add-icon"/>
                        <span>Add</span>
                    </button>
                    <button tabIndex={6} type="reset" className="btn-control btn-clear">
                        <span>Clear</span>
                        <BackspaceIcon className="clear-icon"/>
                    </button>
                </div>
            </form>
        </>
    );
}