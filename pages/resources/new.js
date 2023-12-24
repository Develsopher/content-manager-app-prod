import Layout from "components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import ResourceForm from "components/ResourceForm";

function ResourceCreate() {
  const router = useRouter();

  const createResource = (formData) => {
    axios
      .post("/api/resources", formData)
      .then((res) => router.push("/"))
      .catch((err) => {
        alert(err?.response?.data);
      });
  };

  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <div className="resource-form">
              <h1 className="title">Add New Resource</h1>
              <ResourceForm onFormSubmit={createResource} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ResourceCreate;
