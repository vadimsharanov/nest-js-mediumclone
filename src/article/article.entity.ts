import { UserEntity } from "@app/user/user.entity";
import { timestamp } from "rxjs";
import {
  BeforeUpdate,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "articles" })
export class ArticleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  slug: string;

  @Column()
  title: string;

  @Column({ default: "" })
  description: string;

  @Column({ default: "" })
  body: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  updateAt: Date;

  @BeforeUpdate()
  updateTimeStamp() {
    this.updateAt = new Date();
  }

  @Column("simple-array")
  tagList: string[];

  @Column({ default: 0 })
  favoritesCount: number;

  @ManyToOne(() => UserEntity, (user) => user.articles)
  author: UserEntity;
}
