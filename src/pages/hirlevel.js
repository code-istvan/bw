import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Button from "../components/Button"
import { Link } from "gatsby"

const Hirlevel = () => (
  <>
    <Layout>
      <Seo title="Hírlevél" />
      <h1>Feliratkozás hírlevélre</h1>
      <div className="row">
        <div className="col">
          <form
            name="newsletter bandhaworks"
            action="/mantra"
            method="post"
            data-netlify="true"
            onSubmit="submit"
            data-netlify-honeypot="bot-field"
          >
            <input
              type="hidden"
              name="form-name"
              value="newsletter bandhaworks"
            />
            <div hidden>
              <input name="bot-field" />
            </div>
            <div className="row">
              <div className="col-6-md">
                <input type="text" name="name" placeholder="Név" required />
                <br />
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col d-grid gap-2 contact_checkbox">
                <Button
                  type="submit"
                  buttonStyle="btn--mobil--secondary--solid"
                  buttonSize="btn--small"
                >
                  FELIRATKOZÁS
                </Button>
                <label className="form-control">
                  <input type="checkbox" name="checkbox" required />
                  Megismertem és elfogadom az
                  <Link href="/adatvedelem"> adatvédelmi tájékoztatót</Link>,
                  hozzájárulok e-mail címem kezeléséhez.
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  </>
)

export default Hirlevel
