import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./interfaces/user.interface";

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
    },
    {
      id: 3,
      name: "Michael Johnson",
      email: "michael@example.com",
    },
    {
      id: 4,
      name: "Sarah Williams",
      email: "sarah@example.com",
    },
    {
      id: 5,
      name: "Robert Brown",
      email: "robert@example.com",
    },
    {
      id: 6,
      name: "Emily Davis",
      email: "emily@example.com",
    },
    {
      id: 7,
      name: "David Wilson",
      email: "david@example.com",
    },
  ];

  create(createUserDto: CreateUserDto) {
    if (!createUserDto.name || !createUserDto.email) {
      throw new Error("Name and email are required");
    }
    if (this.users.some(user => user.email === createUserDto.email)) {
      throw new Error("Email already exists");
    }
    const user = {
      id: this.users.length + 1,
      ...createUserDto,
    };
    this.users.push(user);
    return user;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User | null {
    return this.users.find((user) => user.id === id) || null;
  }

  update(id: number, updateUserDto: UpdateUserDto): User | null {
    if (!updateUserDto.name && !updateUserDto.email) {
      throw new Error(
        "At least one field (name or email) must be provided for update"
      );
    }
    const userIndex = this.users.findIndex(
      (user) => user.id === id
    );
    if (userIndex >= 0) {
      this.users[userIndex] = {
        ...this.users[userIndex],
        ...updateUserDto,
      };
      return this.users[userIndex];
    }
    return null;
  }

  remove(id: number): User | null {
    const userIndex = this.users.findIndex(
      (user) => user.id === id
    );
    if (userIndex >= 0) {
      const [removedUser] = this.users.splice(userIndex, 1);
      return removedUser;
    }
    return null;
  }
}
