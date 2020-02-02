package com.bmdb.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.web.bind.annotation.*;

import com.bmdb.business.Movie;
import com.bmdb.db.MovieRepository;

@CrossOrigin
@RestController
@RequestMapping("/movies")
public class MovieController {
	
	@Autowired
	private MovieRepository movieRepo;
	
	@GetMapping()
	public JsonResponse list() {
		return JsonResponse.getInstance(movieRepo.findAll());
	}
	
	 // get - return 1 stuff for the given id
    @GetMapping("/{id}")
    public JsonResponse getMovie(@PathVariable int id) {
        JsonResponse jr = null;
        try {
            jr = JsonResponse.getInstance(movieRepo.findById(id));
        }
        catch (Exception e) {
            jr = JsonResponse.getInstance(e);
            e.printStackTrace();
        }
        return jr;
    }
//    @GetMapping("/list-movies-for-rating")
//    public JsonResponse listMoviesForRating(@RequestParam String rating) {
//        JsonResponse jr = null;
//        try {
//            jr = JsonResponse.getInstance(movieRepo.findByRating(rating));
//        }
//        catch (Exception e) {
//            jr = JsonResponse.getInstance(e);
//            e.printStackTrace();
//        }
//        return jr;
//    }
    // add - adds a new Movie
    @PostMapping()
    public JsonResponse addMovie(@RequestBody Movie m) {
        // add a new movie
        JsonResponse jr = null;
        try {
            jr = JsonResponse.getInstance(movieRepo.save(m));
        }
        catch (DataIntegrityViolationException dive) {
            jr = JsonResponse.getInstance(dive.getRootCause().getMessage());
            dive.printStackTrace();
        }
        catch (Exception e) {
            jr = JsonResponse.getInstance(e);
            e.printStackTrace();
        }
        return jr;
    }
    
    // update - update a Movie
    @PutMapping("/{id}")
    public JsonResponse updateMovie(@PathVariable int id,@RequestBody Movie m) {
        // update a movie
        JsonResponse jr = null;
        try {
            if (movieRepo.existsById(m.getId())) {
                jr = JsonResponse.getInstance(movieRepo.save(m));
            }
            else {
                // record doesn't exist
                jr = JsonResponse.getInstance("Error updating Movie.  id: "+
                                            m.getId() + " doesn't exist!");
            }
        }
        catch (Exception e) {
            jr = JsonResponse.getInstance(e);
            e.printStackTrace();
        }
        return jr;
    }
    
    // delete - delete a Movie
    @DeleteMapping("/{id}")
    public JsonResponse deleteMovie(@PathVariable int id) {
        // delete a movie
        JsonResponse jr = null;
        
        try {
            if (movieRepo.existsById(id)) {
                movieRepo.deleteById(id);
                jr = JsonResponse.getInstance("Delete successful!");
            }
            else {
                // record doesn't exist
                jr = JsonResponse.getInstance("Error deleting Movie.  id: "+
                                            id + " doesn't exist!");
            }
        }
        catch (DataIntegrityViolationException dive) {
            jr = JsonResponse.getInstance(dive.getRootCause().getMessage());
            dive.printStackTrace();
        }
        catch (Exception e) {
            jr = JsonResponse.getInstance(e);
            e.printStackTrace();
        }
        return jr;
    }
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
