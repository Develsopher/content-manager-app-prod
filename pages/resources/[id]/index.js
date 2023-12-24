import Layout from "components/Layout";
import Link from "next/link";
import axios from "axios";
import moment from "moment";

const ResourceDetail = ({ resource }) => {
  const activateResouce = () => {
    axios
      .patch("/api/resources", { ...resource, status: "active" })
      .then((_) => location.reload())
      .catch((_) => alert("Cannot active the resource"));
  };

  return (
    <Layout>
      <section className="hero ">
        <div className="hero-body">
          <div className="container">
            <section className="section">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="content is-medium">
                    <h2 className="subtitle is-4">
                      {moment(resource?.createdAt).format("LLL")}
                    </h2>
                    <h1 className="title">{resource.title}</h1>
                    <p>{resource.description}</p>
                    <p>Time to Finish : {resource.timeToFinish} min</p>
                    {resource.status === "inactive" && (
                      <>
                        <Link
                          href={`/resources/${resource.id}/edit`}
                          className="button is-warning"
                        >
                          Update
                        </Link>
                        <button
                          onClick={activateResouce}
                          className="button is-success ml-1"
                        >
                          Activate
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const resData = await fetch(`${process.env.API_URL}/resources/${params.id}`);
  const data = await resData.json();

  return {
    props: {
      resource: data,
    },
  };
}

export default ResourceDetail;
