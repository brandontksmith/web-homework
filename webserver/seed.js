const mongoose = require('mongoose')
const faker = require('faker')
const MONGO_URI = 'mongodb://divvy:divvypay@localhost:27017/graphql'

const { TransactionModel } = require('./data-models/Transaction')
const { UserModel } = require('./data-models/User');

mongoose.Promise = global.Promise
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true
})

const seed = async () => {
  for (let i = 0; i < 100; i++) {
    console.log("Creating User");

    const user = new UserModel({
      id: new mongoose.Types.ObjectId(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName()
    })

    try {
      await user.save();
    } catch (e) {
      console.log(e);
    }

    const transactions = Math.floor(Math.random() * 10) + 1;

    for (let i = 1; i <= transactions; i++) {
      console.log("Creating Transaction");

      const isCredit = faker.random.boolean();

      const transaction = new TransactionModel({
        id: new mongoose.Types.ObjectId(),
        user_id: user.id,
        amount: faker.finance.amount(),
        credit: isCredit,
        debit: !isCredit,
        description: faker.finance.transactionDescription(),
        merchant_id: null
      })

      console.log(await transaction.save())
    }
  }
}

seed();
