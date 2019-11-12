'use strict'

const UserRepo = use('App/Repositories/UserRepository')
const BaseController = use('BaseController')
class UserController extends BaseController {

  constructor(){
    super(UserRepo)
    this.repo = UserRepo
  }
}

module.exports = UserController