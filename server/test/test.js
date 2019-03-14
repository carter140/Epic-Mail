import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';
import messages from '../controllers/messages';
import moment from 'moment';


chai.should();
chai.use(chaiHttp);

const expect = chai.expect;


describe("POST /newMessage", () => {
  it("Should create a new message", (done) => {
    const newMessage = {
      
        createdOn: moment(Date.now()),
        subject: 'hello',
        msg: 'muraho dore ibyiza biraje',
        senderId: 1,
        receiverId: 3,
        parentMessageId: 4,
        status: 'unread'
    };
    chai
      .request(app)
      .post("/api/messages")
      .send(newMessage)
      .end((req, res) => {
        expect(res.body).to.have.property("data");
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.property("status").equal(200);
        
        done();
      });
  });


  });

describe("GET /messages", () => {
  it("it should fetch all Messages", (done) => {
    chai
      .request(app)
      .get("/api/Messages")
      .end((err, res) => {
        res.body.should.property("status").eql(200);
        res.body.should.property("data").that.is.an("array");
        done();
      });
  });
});

describe("GET /messages/<message-id>", () => {
  it("once it fails to fectch a specific messages, it should show error message with status code of 404", (done) => {
    const id = "fake_id";
    chai
      .request(app)
      .get(`/api/messages/${id}`)
      .end((err, res) => {
        res.body.should.have.property("status").eql(404);
        res.body.should.have.property("message").eql("the message with the given id is not available");
        done();
      });

  });
  it("it should return a specific Message", (done) => {
    const id = 1;

    chai
      .request(app)
      .get("/api/messages")
      .end((err, res) => {
        expect(res.body).to.be.an("object");
        done();
      });
  });


});

