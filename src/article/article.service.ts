import { Injectable } from "@nestjs/common";

@Injectable()
export class ArticleService {
  async createArticle() {
    return "service create article";
  }
}
