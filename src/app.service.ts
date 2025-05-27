import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'API de Usuários - MBA Engenharia de Software - Faculdade Impacta';
  }

  getHealth(): any {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      service: 'Users API',
      version: '1.0.0'
    };
  }
}