import { Body, Controller, Get, HttpStatus, Param, Post } from '@nestjs/common'
import { ApiResponse, ApiUseTags } from '@nestjs/swagger'
import { ArticleService } from './article.service'
import { ArticlePostInDto } from './dto/article-post-in.dto'

@ApiUseTags('Article')
@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post('create')
  @ApiResponse({ status: HttpStatus.OK, description: 'Article créé.' })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Une erreur est survenue dans la création de l\'article.',
  })
  async create(@Body() article: ArticlePostInDto) {
    return this.articleService.create(article)
  }

  @Get(':id')
  @ApiResponse({ status: HttpStatus.OK, description: 'Article trouvé.' })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Article non trouvé :/'
  })
  async getById(@Param('id') id: string) {
    return this.articleService.getById(id)
  }

  @Get(':title')
  @ApiResponse({ status: HttpStatus.OK, description: 'Article trouvé.' })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Article non trouvé :/'
  })
  async getByTitle(@Param('title') title: string) {
    return this.articleService.getByTitle(title)
  }
}