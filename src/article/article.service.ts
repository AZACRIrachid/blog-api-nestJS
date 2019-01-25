import { Inject, Injectable } from '@nestjs/common'
import { ArticleRepository } from './article.repository'
import { Article } from './entity/article.entity'

@Injectable()
export class ArticleService {
  constructor(
    @Inject(ArticleRepository)
    private readonly articleRepository: ArticleRepository
  ) {}

  /**
   * Returns a article identified
   *
   * @param article - article
   * @returns Resolves with Article
   */
  async create(data: Partial<Article>) {
    return this.articleRepository.save(new Article(data))
  }

  /**
   * Returns a article identified by its id
   *
   * @param id - article id
   * @returns Resolves with Article
   */
  async getById(id: string) {
    return this.articleRepository.findOne(id)
  }

  /**
   * Returns a article identified by its id
   *
   * @param id - article id
   * @returns Resolves with Article
   */
  async getByTitle(title: string) {
    return this.articleRepository.findOne({ where: { title } })
  }

  /**
   * Returns a article identified
   *
   * @param article - article
   * @returns Resolves with Article
   */
  /*
  async updateById(article: ArticlePostInDto) {
    return this.articleRepository.save({}...ArticlePostInDto})
  }
  */
}