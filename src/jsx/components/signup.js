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
const SignUp = () => {
  return (
    <div class="box">
    <h2 >
    Sign up to see all jobs and apply on the <a style={getStyleObjectFromString("text-decoration:underline")} target="_blank" href="https://twitter.com/levelsio/status/1606328087569801223?s=20&amp;t=6snxVEs79ITic1-LwC-pSg" previewlistener="true">#1 remote job board</a>
    </h2>
    <input type="text" value="" class="username" placeholder="Choose a username" style={getStyleObjectFromString("margin-left:0;margin-right:0;width:100%;")}/><br/>
    <input type="text" class="email" placeholder="Enter your email" value="" style={getStyleObjectFromString("margin-left:0;margin-right:0;width:100%;")}/><br/>
    <div class="action-sign-up button red" style={getStyleObjectFromString("width:100%;margin-top:7px;")}>
    Continue
    </div>
    <br/><br/>
    Already a member? &nbsp;<a href="/login" style={getStyleObjectFromString("font-weight:bold;text-decoration:underline;")} previewlistener="true">Log in</a><br/>
    <div style={getStyleObjectFromString("font-size:11px;margin-top:14px;")}>
    By creating an account you agree to our <a href="/legal" style={getStyleObjectFromString("text-decoration:underline;")} previewlistener="true">terms of service</a>
    </div>
    </div>
  );
};

export default SignUp;
