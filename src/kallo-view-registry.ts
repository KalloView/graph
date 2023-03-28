import { BigInt } from "@graphprotocol/graph-ts";
import {
  ReviewCommented as ReviewCommentedEvent,
  ReviewDownvoted as ReviewDownvotedEvent,
  ReviewPosted as ReviewPostedEvent,
  ReviewUpvoted as ReviewUpvotedEvent
} from "../generated/KalloViewRegistry/KalloViewRegistry"
import {
  Location,
  Review,
  Comment
} from "../generated/schema"

export function handleReviewCommented(event: ReviewCommentedEvent): void {
  let location = Location.load(event.params.locationId)
  
  // No location, do nothing
  if (!location) return;

  let comment = new Comment(event.transaction.hash.concatI32(event.logIndex.toI32()))

  comment.review = location.id
  comment.url = event.params.commentId.toString()
  comment.blockNumber = event.block.number
  comment.blockTimestamp = event.block.timestamp
  comment.transactionHash = event.transaction.hash

  comment.save()
}

export function handleReviewDownvoted(event: ReviewDownvotedEvent): void {
  let review = Review.load(event.params.reviewId)
  if (!review) {
    return
  }
  
  review.downvotes = review.downvotes + 1

  review.save()
}

export function handleReviewPosted(event: ReviewPostedEvent): void {
  let location = Location.load(event.params.locationId)

  if (!location) {
    location = new Location(event.params.locationId)
    location.reviews = []
  }

  // Create review Entity
  let review = new Review(event.params.reviewId)
  review.url = event.params.reviewId.toString()
  review.location = location.id
  review.blockNumber = event.block.number
  review.blockTimestamp = event.block.timestamp
  review.transactionHash = event.transaction.hash
  review.author = event.params.author
  review.comments = []
  review.upvotes = 0
  review.downvotes = 0
  
  // Save
  review.save()

  // Save location
  location.reviews.push(review.id)
  location.save()
}

export function handleReviewUpvoted(event: ReviewUpvotedEvent): void {
  let review = Review.load(event.params.reviewId)
  if (!review) {
    return
  }

  review.upvotes = review.upvotes + 1

  review.save()
}
