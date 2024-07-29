import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mongodb',
  url: 'mongodb://localhost/your_database_name',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true, // Remember, warning this option in production
  useUnifiedTopology: true,
};
