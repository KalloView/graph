import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Bytes, Address } from "@graphprotocol/graph-ts"
import { ReviewCommented } from "../generated/schema"
import { ReviewCommented as ReviewCommentedEvent } from "../generated/KalloViewRegistry/KalloViewRegistry"
import { handleReviewCommented } from "../src/kallo-view-registry"
import { createReviewCommentedEvent } from "./kallo-view-registry-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let locationId = Bytes.fromI32(1234567890)
    let reviewId = Bytes.fromI32(1234567890)
    let commentId = Bytes.fromI32(1234567890)
    let author = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newReviewCommentedEvent = createReviewCommentedEvent(
      locationId,
      reviewId,
      commentId,
      author
    )
    handleReviewCommented(newReviewCommentedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ReviewCommented created and stored", () => {
    assert.entityCount("ReviewCommented", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ReviewCommented",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "locationId",
      "1234567890"
    )
    assert.fieldEquals(
      "ReviewCommented",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "reviewId",
      "1234567890"
    )
    assert.fieldEquals(
      "ReviewCommented",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "commentId",
      "1234567890"
    )
    assert.fieldEquals(
      "ReviewCommented",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "author",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
