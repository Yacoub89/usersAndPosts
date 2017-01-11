import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { UserService } from './../users/users.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostService, UserService]
})
export class PostsComponent implements OnInit {
  posts = [];
  pagedPosts = [];
  users = [];
  postsLoading;
  commentsLoading;
  currentPost;
  pageSize = 10;

  constructor(
    private _postService: PostService,
    private _userService: UserService) { }

  ngOnInit() {
    this.loadUsers();
    this.loadPosts();
  }

  private loadUsers() {
    this._userService.getUsers()
      .subscribe(users => this.users = users);
  }
  private loadPosts(filter?) {
    this.postsLoading = true;
    this._postService.getPosts(filter)
      .subscribe(
      posts => {
        this.posts = posts;
        this.pagedPosts = this.getPostsInPage(1)
      },
      null,
      () => { this.postsLoading = false; });
  }
  reloadPosts(filter) {
    this.currentPost = null;

    this.loadPosts(filter);
  }
  select(post) {
    this.currentPost = post;

    this.commentsLoading = true;
    this._postService.getComments(post.id)
      .subscribe(
      comments =>
        this.currentPost.comments = comments,
      null,
      () => this.commentsLoading = false);
  }

  onPageChanged(page) {
    var startIndex = (page - 1) * this.pageSize;
    this.pagedPosts = this.getPostsInPage(page)
  }
  private getPostsInPage(page) {
    var result = [];
    var startingIndex = (page - 1) * this.pageSize;
    var endIndex = Math.min(startingIndex + this.pageSize, this.posts.length);

    for (var i = startingIndex; i < endIndex; i++)
      result.push(this.posts[i]);

    return result;
  }

}
