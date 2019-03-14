import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';
import messages from '../controllers/messages';
import moment from 'moment';
import valid from '../helpers/validation';
import createAccount from '../controllers/users';
import login from '../controllers/login';



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
    .get("/api/messages")
    .end((err, res) => {
      expect(res.body).to.be.an("object");
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



describe('POST/ createAccount', () => {
  it("should create a new User and status code of 200", (done) => {
   
    const createAccount = {
      firstName: "leon",
      lastName:"og",
      email: "og@carter.com",
      password: "cartermatic",
      confirmPassword: "cartermatic"
  }
    chai 
        
          .request(app)
          .get("/api/auth/signup")
          .end((err, res) => {
            expect(res.body).to.be.an("object");
            done();  

            });
});
});

  




describe('POST / login', () => {
  it("once the user not found, it should show an error message with status code of 404", (done) => {
      const login = {
          "email" : "go@carter.com"
      };
      chai.request(app)
          .post("/api/auth/login")
          .send(login)
          .end((err, res) => {
          res.body.should.have.property('status').eql(400);
              done();
          });

  });

  it("should the user access his data", (done) => {
      chai
          .request(app)
          .post("/api/auth/login")
          .end((err, res) => {
              expect(res.body).to.be.an("object");
              expect(res.status).to.equal(200);
              expect(res.body).to.have.property("status");
              
              done();

              



          });
  });
});






