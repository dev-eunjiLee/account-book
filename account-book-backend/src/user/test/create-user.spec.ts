import { CreateUserService } from '../service/create-user.service';
import { CreateUserInboundPortInputDto } from '../inbound-port/create-user.inbound-port';
import { CreateUserOutboundAdapter } from '../outbound-adapter/create-user.outbound-adapter';

// TODO 테스트용 목업 레포지토리 생성 방법 확인

describe('CreateUserService', () => {
  const mockUserRepository = mockRepository();
  const createUserOutboundPort = new CreateUserOutboundAdapter(
    mockUserRepository,
  );
  const createUserService = new CreateUserService(createUserOutboundPort);
  let param: CreateUserInboundPortInputDto;

  test('유저 생성이 잘 되는지 확인', () => {
    param = {
      id: 'test',
      password: 'test',
    };
    const result = createUserService;
  });
});
