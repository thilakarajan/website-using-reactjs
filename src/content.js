import './content.css'
const Content = () => {
    // const myWebsite = ["Home","About us","Services","Product us","Contact us"]
    // const websiteMenu = myWebsite.map((x)=>{
    //     return <li>{x}</li>
    // })
    return (
      <div className="content">
        <table>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Dept</th>
            <th>College name</th>
            <th>Year of Passed Out</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Thilak</td>
            <td>CSE</td>
            <td>HICET</td>
            <td>2025</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Nito</td>
            <td>CSE</td>
            <td>HICET</td>
            <td>2025</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Paramesh</td>
            <td>CSE</td>
            <td>HICET</td>
            <td>2025</td>
          </tr>
        </table>
        <form action="">
          <span>
            <label htmlFor="username" disabled>
              Username
            </label>
            <input type="text" id="username" />
          </span>
          <span>
            <label htmlFor="password" disabled>
              Password
            </label>
            <input type="text" id="password" />
          </span>
          <span>
            <button>submit</button>
          </span>
        </form>
      </div>
    )
}
export default Content;