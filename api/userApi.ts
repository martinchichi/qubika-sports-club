import { APIRequestContext } from '@playwright/test';

export class UserApi {
  private request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async createUser() {
    const response = await this.request.post('https://api.club-administration.qa.qubika.com/api/v1/users', {
      data: {
        email: `test${Date.now()}@example.com`,
        password: 'TestPassword123!',
        firstName: 'Test',
        lastName: 'User',
        role: 'USER'
      },
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    const userData = await response.json();
    return userData;
  }
}