import { UserNest } from '../user/entity/user.entity'
import { ArticleRepository } from './article.repository'
import { ArticleService } from './article.service'
import { Article } from './entity/article.entity'

describe('ArticleService', () => {
  let service: ArticleService
  let repository: ArticleRepository

  beforeAll(() => {
    repository = {} as any
    service = new ArticleService(repository)
  })

  describe('create', () => {
    it('Should call and return repository.create with article passed in param', async () => {
      const newArticle = new Article({
        title: 'Mon super article',
        content: 'Wallah quel super article',
        likes: 5,
        disLikes: 1,
        author: new UserNest({ firstName: 'Tim', lastName: 'Ad' }),
      })

      repository.save = jest.fn().mockResolvedValue(newArticle)

      const result = await service.create(newArticle)

      expect(result).toBe(newArticle)
      expect(repository.save).toHaveBeenCalledWith(newArticle)
    })
  })

  describe('getById', () => {
    it('Should call and return repository.findOne with id passed in param', async () => {
      const id = 'uid'
      const user = { name: 'toto' }
      repository.findOne = jest.fn().mockResolvedValue(user)

      const result = await service.getById(id)

      expect(result).toBe(user)
      expect(repository.findOne).toHaveBeenCalledWith(id)
    })
  })

  describe('getByTitle', () => {
    it('Should call and return repository.findOne with title passed in param', async () => {
      const title = 'article 1'
      const user = { name: 'toto' }
      repository.findOne = jest.fn().mockResolvedValue(user)

      const result = await service.getByTitle(title)

      expect(result).toBe(user)
      expect(repository.findOne).toHaveBeenCalledWith({ where: { title } })
    })
  })
})
