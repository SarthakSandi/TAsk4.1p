import React from 'react';
import {  Button } from 'semantic-ui-react'
import './login.css';

const Login = () => {
  return (
    <body>
      <header >
        <form action="/" method='POST'>
          <div className="container">
            <div class="deakin"><p >Sign up for daily Insider</p>

              <div class="s">  <input type='email' placeholder='email' />

              </div>
              <div className="b">
                <Button>Subscribe</Button>
              </div>

            </div>
          </div>

        </form>
      </header>
      <br />
    </body>

  )
}

export default Login