
import './signup.css'
const formatStringToCamelCase = str => {
    const splitted = str.split("-");
    if (splitted.length === 1) return splitted[0];
    return (
      splitted[0] +
      splitted
        .slice(1)
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join("")
    );
  };
  
  export const getStyleObjectFromString = str => {
    const style = {};
    str.split(";").forEach(el => {
      const [property, value] = el.split(":");
      if (!property) return;
  
      const formattedProperty = formatStringToCamelCase(property.trim());
      style[formattedProperty] = value.trim();
    });
  
    return style;
  };
const Login = () => {
  return (
    <div class="box">
    <h2 >
    Sign up to see all jobs and apply on the <a style={getStyleObjectFromString("text-decoration:underline")} target="_blank" href="https://twitter.com/levelsio/status/1606328087569801223?s=20&amp;t=6snxVEs79ITic1-LwC-pSg" previewlistener="true">#1 remote job board</a>
    </h2>
    <input type="text" class="email" placeholder="Username or Email" value="" style={getStyleObjectFromString("margin-left:0;margin-right:0;width:100%;")}/><br/>
    <div class="action-sign-up button red" style={getStyleObjectFromString("width:100%;margin-top:7px;")}>
    Continue
    </div>
    <br/><br/>
    Not a member yet? &nbsp;<a href="/signup" style={getStyleObjectFromString("font-weight:bold;text-decoration:underline;")} previewlistener="true">Sign up</a><br/>
    </div>
  );
};

export default Login;
