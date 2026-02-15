export default function Header({name}) {
    return (
        <header>
        <h1>
            {`Welcome ${name} to CodeCraft intranet`}
        </h1>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="emp_mgmt.html">Employee Management</a></li>
                <li><a href="javascript_practice.html">JavaScript Practice!</a></li>
            </ul>
        </nav>
    </header>
    )
};