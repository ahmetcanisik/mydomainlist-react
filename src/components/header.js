import { Link } from './utils';
import { Cog6ToothIcon } from "@heroicons/react/24/outline";

function Header() {
    return (
        <header className="w-full">
            <nav className="w-full h-[50px] shadow sticky flex justify-between items-center px-4">
                <div className="logo">
                    <Link className="logo-title" href="/">My Domain List</Link>
                    <select tabIndex={0} defaultValue="@0.0.2" name="select_version" id="select_version">
                        <option value="0.0.2">@0.0.2</option>
                        <option value="0.0.1">@0.0.1</option>
                    </select>
                </div>
                <button tabIndex={1} type="button">
                    <Cog6ToothIcon className="settings-icon" />
                </button>
            </nav>
        </header>
    );
}

export default Header;