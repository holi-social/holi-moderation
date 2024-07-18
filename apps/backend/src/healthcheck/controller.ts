import { Controller, Get } from '@nestjs/common'
import { HealthCheckService, HealthCheck, TypeOrmHealthIndicator } from '@nestjs/terminus'

import { Public } from '../auth/decorators'

@Controller('health')
export class HealthCheckController {
  constructor(
    private health: HealthCheckService,
    private db: TypeOrmHealthIndicator,
  ) {}

  @Get()
  @Public()
  @HealthCheck()
  readiness() {
    return this.health.check([async () => this.db.pingCheck('database', { timeout: 300 })])
  }
}
